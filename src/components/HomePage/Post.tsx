import { initialPosts, user } from "../../data/home";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FaHeart } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Post = () => {
	const [posts, setPosts] = useState(initialPosts);
	const [comment, setComment] = useState('');

	const handleLikes = (id: number) => {
		const updatePost = posts.find(post => post.id === id);
		if (updatePost)
		{
			if (updatePost.liked)
				setPosts(posts.map(post => post.id !== id ? post : {...post, likes: post.likes - 1, liked: !post.liked}));
			else
				setPosts(posts.map(post => post.id !== id ? post : {...post, likes: post.likes + 1, liked: !post.liked}));
		}
	}

  const handleComment = (event: React.SyntheticEvent, id: number) => {
		event.preventDefault();
		if (!comment)
			return null;
		const updatePost = posts.find(post => post.id === id);
		if (updatePost)
		{
			const newComment = {
				name: user.name,
				icon: {
					src: user.icon.src,
					alt: user.icon.alt
				},
				description: comment
			}
			const newComments = updatePost.comments.concat(newComment);
			setPosts(posts.map(post => post.id !== id ? post : {...post, comments: newComments}));
		}
		setComment('');
	};

	return (
	<div className="col-md-8 col-xl-6">
		<div className="row">
			{posts.map(({id, name, icon, partner, date, event, project, likes, liked, comments}) => (
					<div className="col-md-12" key={id}>
						<Card className="bg-white mx-3 mb-4 p-1">
							<Card.Body>
								<div className="d-flex align-items-center">
									<div>
										<img src={icon.src} alt={icon.alt} width="50px" />
									</div>
									<div className="ms-3">
										<p className="mb-0">
											<span className="fw-bold">{name}</span>
											<span> is with </span>
											<span className="fw-bold">{partner}</span>
										</p>
										<p className="mb-0 text-secondary" style={{fontSize: '14px'}}>{date} - {event}</p>
									</div>
								</div>

								<div className="my-3">
									<p><i>{project.description}</i></p>
									<img src={project.img.src} alt={project.img.alt} className="rounded-2 w-100"/>
								</div>

								<div>
									<button onClick={() => handleLikes(id)}>
										<div className="d-flex align-items-center">
											<span className="d-flex align-items-center me-2">
												{liked ? (
													<FaHeart style={{ color: 'red' }} />
												) : (
													<FaRegHeart style={{ color: 'grey' }} />
												)}
											</span>
											<span>{likes} Likes</span>
										</div>
									</button>
								</div>

								<hr style={{color: 'lightgrey', width: '80%', translate: '10% 0'}}/>

								<div className="mt-4 mb-2">
									{comments.map(comment => 
										<div key={uuidv4()} className="d-flex mb-3">
											<div>
												<img src={comment.icon.src} alt={comment.icon.alt} width="50px" />
											</div>
											<div className="ms-3 py-2 px-3 rounded-3" style={{ backgroundColor: '#f1f1f1' }}>
												<p className="mb-0 fw-bold">{comment.name}</p>
												<p className="mb-0">{comment.description}</p>
											</div>
										</div>
									)}

									<Form className="mt-4" onSubmit={(event) => handleComment(event, id)}>
										<Form.Group className="mb-2" controlId="formComment">
											<Row className="align-items-center no-gutters">
												<Col className="pe-0">
													<Form.Control
														type="text"
														value={comment}
														onChange={({target}) => setComment(target.value)}
														placeholder="Add your comments here..."
														style={{ boxShadow: 'none' }}
														autoComplete="off"
													/>
												</Col>
												<Col xs="auto" className="ps-0">
													<Button type="submit">
														<IoIosSend/>
													</Button>
												</Col>
											</Row>
										</Form.Group>
									</Form>
								</div>

							</Card.Body>
						</Card>
					</div>
				))
			}
		</div>
	</div>
	);
};

export default Post;
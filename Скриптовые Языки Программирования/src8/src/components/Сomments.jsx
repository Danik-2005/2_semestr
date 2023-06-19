import React from 'react';
import CommentList from './CommentList'

class Comments extends React.Component {
	constructor() {
		super()

		this.state = {
			postList:[],
			post: {
				id: 0,
				name: 'Жиляк',
				image: '',
				email: 'gznadya@gmail.com',
				text: 'Мда, лаба так себе, думаю лучше заново сделай',
				secretWord: '1',
				date: null,
				changed: false
			}
		}
	}

	
	render() {
		const nameChage = (e) => {
			this.setState((state) => { return { post: Object.assign(state.post, { name: e.target.value }) } })
		}
		const avatarChage = (e) => {
			this.setState((state) => { return { post: Object.assign(state.post, { image: e.target.value }) } })
		}
		const emailChage = (e) => {
			this.setState((state) => { return { post: Object.assign(state.post, { email: e.target.value }) } })
		}
		const textChage = (e) => {
			this.setState((state) => { return { post: Object.assign(state.post, { text: e.target.value }) } })
		}
		const secretWordChage = (e) => {
			this.setState((state) => { return { post: Object.assign(state.post, { secretWord: e.target.value }) } })
		}

		const addPost = (e) => {
			e.preventDefault()

			let id = this.state.post.id
			let name = this.state.post.name
			let image = this.state.post.image
			let email = this.state.post.email
			let text = this.state.post.text
			let secretWord = this.state.post.secretWord
			let date = new Date().toLocaleString()
			let changed = this.state.post.changed

			const newPost = {
				id,
				name,
				image,
				email,
				text,
				secretWord,
				date,
				changed
			}

			if (this.state.post.name !== '' &&
					this.state.post.image !== '' && 
					this.state.post.email !== '' && 
					this.state.post.text !== '' && 
					this.state.post.secretWord !== '')
				this.setState({
					postList: [...this.state.postList, newPost],
					post: {
						id: (this.state.post.id + 1),
						name: '',
						image: '',
						email: '',
						text: '',
						secretWord: '',
						changed: false
					}
				})
		}

		const editPost = (post) => {
			let pos = -1
			this.state.postList.map((p) => {
				if (p.id === post.id) {
					return pos = p.id
				}
				else {
					return null
				}
			})
			if (pos !== -1) {

				this.setState({
					postList: [...this.state.postList.slice(0, pos), post, ...this.state.postList.slice(pos + 1)],
				})
			}
		}

		const deletePost = (post) => {
			this.setState({
				postList: this.state.postList.filter(p => p.id !== post.id)
			})
		}

    return (
			<>
				<form action="">
					<label htmlFor="">Имя пользователя</label>
					<input type="text" value={this.state.post.name} onChange={e => nameChage(e)}/>
					<label htmlFor="">Аватар пользователя</label>
					<div className='avatar_container'>
						<div className={this.state.post.image !== '' ? 'miniImage' : ''} style={{ backgroundImage: `url(${this.state.post.image})` }}></div>
						<select className={this.state.post.image === '' ? 'full-width' : 'image-width'} onChange={e => avatarChage(e)} value={this.state.post.image}>
							<option value="">Выберите аватар</option>
							<option value="https://anime-fans.ru/wp-content/uploads/2023/02/Prikolnye-anime-avatarki-dlya-diskorda_001-scaled.jpg">ава 1</option>
							<option value="https://android-obzor.com/wp-content/uploads/2022/02/5.gif">ава 2</option>
							<option value="https://sun9-8.userapi.com/impg/zPxXI1iliM_Dl5wzYSDenmjFsUEcAPbzkK-HMQ/gEQajGlm4_E.jpg?size=604x604&quality=95&sign=6222303292f53407f029b9b9151783eb&c_uniq_tag=Mk6FAgK3XL9I7E1b_HWwmCu7fx-xyzE1iURZDr9iOG4&type=album">ава 3</option>
							<option value="https://giffs.ru/wp-content/uploads/2020/01/2020-03-20_09-44-03.jpg">ава 4</option>
							<option value="https://android-obzor.com/wp-content/uploads/2022/03/1-28-1-1024x838.jpg">ава 5</option>
						</select>
					</div>
					<label htmlFor="">Электронная почта</label>
					<input type="email" value={this.state.post.email} onChange={e => emailChage(e)}/>
					<label htmlFor="">Комментарий</label>
					<textarea value={this.state.post.text} onChange={e => textChage(e)}/>
					<label htmlFor="">Cекретное слово для удаления</label>
					<input type="password" value={this.state.post.secretWord} onChange={e => secretWordChage(e)} /> <br />
					<button onClick={e => addPost(e)}>Оставить комментарий</button>
				</form>

				<div className='separator05'/>

				<CommentList
					postList={this.state.postList}
					editPost={editPost}
					deletePost={deletePost} />
			</>
    );
  }
}

export default Comments;
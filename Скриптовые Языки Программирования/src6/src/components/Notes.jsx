import React from 'react';
import "../styles/note.css"

class Notes extends React.Component {
    constructor(){
        super()
        this.state = {
            notes:[],
            note:{
                header: 'Заголовок',
                date: '2004-12-16',
                text: 'текст'
            }
        }
    }

    handleAdd = (e) =>{
        e.preventDefault()
        const header = this.state.note.header
        const date = this.state.note.date
        const text = this.state.note.text

        const newNote = {
            header,
            date,
            text
        }
        
        if(this.state.note.header !=='' &&
           this.state.note.date !=='' && 
           this.state.note.text !==''){
            this.setState({ notes: [...this.state.notes, newNote]})
            // this.setState({ note:{
            //     header: '',
            //     date: '',
            //     text: ''
            // }})
        }
    }

    changeHeader = (e) => {
        this.setState((state) => {return { note: Object.assign(state.note, { header: e.target.value }) } })
    }
    changeDate = (e) => {
        this.setState((state) => {return { note: Object.assign(state.note, { date: e.target.value }) } })
    }
    changeText = (e) => {
        this.setState((state) => {return { note: Object.assign(state.note, { text: e.target.value }) } })
    }

    deleteNote = (notesList) =>{
        if(notesList.length > 3){
            return (
                <div className="buttons">
                    <button className='delete_first' onClick={this.deleteFirst}>Удалить первую заметку</button>
                    <button className='delete_second' onClick={this.deleteLast}>Удалить последнюю заметку</button>
                </div>
            )
        }
    }

    warning = (notesList) => {
        if(notesList.length >= 8)
            return (
                <h2 className='full'>
                    Больше 7 заметок!
                </h2>
            )
    }

    deleteFirst = () =>{
        this.setState({
            notes: [...this.state.notes].splice(1, this.state.notes.length)
        })
    }
    deleteLast = () =>{
        this.setState({
            notes: [...this.state.notes].splice(0, this.state.notes.length - 1)
        })
    }
  render() {
    return (
        <div className='note_container'>
            <form className='second_form'>
                <label htmlFor="header">Заголовок заметки</label> <br />
                <input type="text" id='header' value={this.state.note.header} onChange={this.changeHeader} required/> <br />

                <label htmlFor="date">Дата заметки</label> <br />
                <input type="date" value={this.state.note.date} onChange={this.changeDate} required/> <br />

                <label htmlFor="text">Заметка</label> <br />
                <textarea rows='5' cols='35' id='text' value={this.state.note.text} onChange={this.changeText} required/> <br />

                <input type="submit" value='Добавить заметку' onClick={e => this.handleAdd(e)}/>
            </form>

            {this.deleteNote(this.state.notes)}
            {this.warning(this.state.notes)}
            {
                this.state.notes.map((note, id) => {
                    if (id < 8)
                        return (
                            <div className="note" key={id} >
                                <h3> {note.header} </h3>
                                <h6> ({note.date}) </h6>
                                <p>{note.text}</p>
                            </div>
                        )
                    else
                        return (
                            <div className="note much" key={id} >
                                <h3> {note.header} </h3>
                                <h6> ({note.date}) </h6>
                                <p>{note.text}</p>
                            </div>
                        )
                })
            }
        </div>
    );
  }
}

export default Notes;

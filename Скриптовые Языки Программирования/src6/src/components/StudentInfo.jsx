import React from 'react';
import StudentInfoHandler from './StudentInfoHandler';
import "../styles/global.css"

class StudentInfo extends React.Component {
    constructor(){
        super()
        this.state = {
            persons:[],
            person: {
                fio: 'Авласенко Г. А.',
                birthday: '2004-12-16',
                universityDate: '2022',
                faculty: 'Фит',
                groupe: '3',
                spec: 'Исит',
                email:'Email@gmail.com',
                telephone: '+375298721968',
            },
        }

    }
    changeFIO = (e) =>{
        this.setState((state) => { return { person: Object.assign(state.person, { fio: e.target.value }) } })
    }
    changeBirthday = (e) =>{
        this.setState((state) => { return { person: Object.assign(state.person, { birthday: e.target.value }) } })
    }
    changeUniversityDate = (e) =>{
        this.setState((state) => { return { person: Object.assign(state.person, { universityDate: e.target.value }) } })
    }
    changeFaculty = (e) =>{
        this.setState((state) => { return { person: Object.assign(state.person, { faculty: e.target.value }) } })
    }
    changeGroupe = (e) =>{
        this.setState((state) => { return { person: Object.assign(state.person, { groupe: e.target.value }) } })
    }
    changeSpec = (e) =>{
        this.setState((state) => { return { person: Object.assign(state.person, { spec: e.target.value }) } })
    }
    changeEmail = (e) =>{
        this.setState((state) => { return { person: Object.assign(state.person, { email: e.target.value }) } })
    }
    changeTelephone = (e) =>{
        this.setState((state) => { return { person: Object.assign(state.person, { telephone: e.target.value }) } })
    }

    addInfo = (e) =>{
        e.preventDefault()
        const fio = this.state.person.fio
        const birthday = this.state.person.birthday
        const universityDate = this.state.person.universityDate
        const faculty = this.state.person.faculty
        const groupe = this.state.person.groupe
        const spec = this.state.person.spec
        const email = this.state.person.email
        const telephone = this.state.person.telephone
        
        const newPerson = {
            fio,
            birthday,
            universityDate,
            faculty,
            groupe,
            spec,
            email,
            telephone
        } 
        

        if(this.state.person.fio !=='' &&
           this.state.person.birthday !=='' && 
           this.state.person.universityDate !=='' && 
           this.state.person.faculty !=='' && 
           this.state.person.groupe !=='' && 
           this.state.person.spec !=='' && 
           this.state.person.email !=='' && 
           this.state.person.telephone !==''){
           
            this.setState({
                persons: [...this.state.persons, newPerson],
            })

            // this.setState({ person: {
            // fio:'',
            // birthday:'',
            // universityDate:'',
            // faculty:'',
            // groupe:'',
            // spec:'',
            // email: '',
            // telephone:'',
            // } })
        }

        console.log(this.state.persons)
    }

  render() {
    return (
        <div className='first'>
            <form className='first_form'>
                <label htmlFor="">ФИО:</label>
                <input type='text' onChange={e => this.changeFIO(e)} value={this.state.person.fio} minLength={5} required/>
                <label htmlFor="">День рождения:</label>
                <input type='date' onChange={e => this.changeBirthday(e)} value={this.state.person.birthday} required/> 
                <label htmlFor="">Год поступления:</label>
                <input type='text' onChange={e => this.changeUniversityDate(e)} value={this.state.person.universityDate} minLength={4} required/> 
                <label htmlFor="">Факультет:</label>
                <input type='text' onChange={e => this.changeFaculty(e)} value={this.state.person.faculty} minLength={1} required/> 
                <label htmlFor="">Группа:</label>
                <input type='text' onChange={e => this.changeGroupe(e)} value={this.state.person.groupe} required/>  
                <label htmlFor="">Специальность:</label>
                <input type='text' onChange={e => this.changeSpec(e)} value={this.state.person.spec} minLength={1} required/> 
                <label htmlFor="">Email:</label>
                <input type='email' onChange={e => this.changeEmail(e)} value={this.state.person.email} minLength={1} required/> 
                <label htmlFor="">Телефон:</label>
                <input type='tel' onChange={e => this.changeTelephone(e)} value={this.state.person.telephone} minLength={2} required/>
                <br/>
                <input type="submit" onClick={this.addInfo} value='Добавить студента' />
            </form>
            <StudentInfoHandler persons={this.state.persons}/>
        </div>
    );
  }
}

export default StudentInfo;
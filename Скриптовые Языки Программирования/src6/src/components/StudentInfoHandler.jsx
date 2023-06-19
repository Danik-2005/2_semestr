import React from 'react';
import "../styles/person.module.css"

class StudentInfoHandler extends React.Component {

    getCourse = (date) => {
        const todayDate = new Date()
        let currentCourse = todayDate.getFullYear() - date
        if (currentCourse > 4)
            return 'Окончил университет'
        else
            return currentCourse
    }

    getAge = (date) => {
        const todayYear = new Date().getFullYear()
        const personYear = parseInt(date.match(/\d+/))
        let currentAge = todayYear - personYear
        return currentAge
    }

    checkWhoEmail = (emailString) => {
        let dog_simvol

        for (let i = 0; i < emailString.length; i++) {
            if (emailString[i] === '@')
                dog_simvol = i
        }

        const emailOperator = emailString.substr(dog_simvol)

        return emailOperator
    }

    checkWhoTelephone = (telString) => {
        let operator

        if (telString.includes('+375291') ||
            telString.includes('+375293') ||
            telString.includes('+375296') ||
            telString.includes('+375299') ||
            telString.includes('80291') ||
            telString.includes('80293') ||
            telString.includes('80296') ||
            telString.includes('80299') ||
            telString.includes('+37544') ||
            telString.includes('8044'))
            operator = 'A1 (Velcom)'

        if (telString.includes('+375292') ||
            telString.includes('+375295') ||
            telString.includes('+375297') ||
            telString.includes('+375298') ||
            telString.includes('80292') ||
            telString.includes('80295') ||
            telString.includes('80297') ||
            telString.includes('80298') ||
            telString.includes('+37533') ||
            telString.includes('8033'))
            operator = 'МТС'

        if (telString.includes('+37525') ||
            telString.includes('8025'))
            operator = 'life :)'

        if (telString.includes('+37517') ||
            telString.includes('8017'))
            operator = 'Белтелеком (городской)'

        return operator
    }


    render() {
        return (
            <div>
                {
                    this.props.persons.map((person, id) => {
                        return (
                            <>
                            <table key={id}>
                                <tbody>
                                    <tr><td>ФИО</td><td>{person.fio}</td></tr>
                                    <tr><td>Текущий возраст</td><td>{this.getAge(person.birthday)}</td></tr>
                                    <tr><td>Факультет, курс, группа</td><td>{person.faculty + ', ' + this.getCourse(person.universityDate) + ', ' + person.groupe}</td></tr>
                                    <tr><td>Специальность</td><td>{person.spec}</td></tr>
                                    <tr><td>Электронная почта</td><td>{person.email}</td></tr>
                                    <tr><td>Оператор услуг электронной почты</td><td>{this.checkWhoEmail(person.email)}</td></tr>
                                    <tr><td>Номер телефона</td><td>{person.telephone}</td></tr>
                                    <tr><td>Оператор услуг мобильной связи</td><td>{this.checkWhoTelephone(person.telephone)}</td></tr>
                                </tbody>
                            </table>
                            <br/>
                            </>
                        )
                        
                    })
                }
            </div>
        );
    }
}

export default StudentInfoHandler;

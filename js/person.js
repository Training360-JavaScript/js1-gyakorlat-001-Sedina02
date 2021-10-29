'use strict';

const personDataLog = ({firstname = 'John',lastname = 'Doe', age = 33 } = {firstname, lastname, age}) => {
    console.log('My name is ' + firstname + ' ' + lastname + '. I am ' + age + ' years old.')
};

personDataLog({firstname: 'Jack'});
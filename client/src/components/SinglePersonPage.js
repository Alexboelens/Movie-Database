import React, { useEffect } from 'react';
import SinglePersonHeader from './SinglePersonHeader';
import { connect } from 'react-redux';
import { getPersonById } from '../actions/peopleActions';


const SinglePersonPage = ({ person, getPersonById, personIsLoaded }) => {
    const id = window.location.pathname.split('/')[2];

    useEffect(() => {
        getPersonById(id)
    }, [id, getPersonById])

    console.log(person)
    return (
        <div>
            {personIsLoaded &&
                <SinglePersonHeader
                    image={person.profile_path}
                    name={person.name}
                    knownFor={person.known_for_department}
                    birthday={person.birthday}
                    placeOfBirth={person.place_of_birth}
                    biography={person.biography}
                />
            }




        </div>
    )
}

const mapStateToProps = state => ({
    person: state.people.person,
    personIsLoaded: state.people.personIsLoaded
})

export default connect(mapStateToProps, { getPersonById })(SinglePersonPage);
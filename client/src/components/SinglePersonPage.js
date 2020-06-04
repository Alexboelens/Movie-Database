import React, { useEffect } from 'react';
import SinglePersonHeader from './SinglePersonHeader';
import SinglePersonRoles from './SinglePersonRoles';
import { connect } from 'react-redux';
import { getPersonById } from '../actions/peopleActions';


const SinglePersonPage = ({ person, getPersonById, personIsLoaded }) => {
    const id = window.location.pathname.split('/')[2];

    useEffect(() => {
        getPersonById(id)
    }, [id, getPersonById])

    return (
        <div>
            {personIsLoaded &&
                <div>
                    <SinglePersonHeader
                        image={person.profile_path}
                        name={person.name}
                        knownFor={person.known_for_department}
                        birthday={person.birthday}
                        placeOfBirth={person.place_of_birth}
                        biography={person.biography}
                    />

                    <SinglePersonRoles
                        mainTitle='Roles Played'
                        array={person.movie_credits.cast}
                    />
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    person: state.people.person,
    personIsLoaded: state.people.personIsLoaded
})

export default connect(mapStateToProps, { getPersonById })(SinglePersonPage);
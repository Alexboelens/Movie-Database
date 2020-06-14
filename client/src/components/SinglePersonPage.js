import React, { useEffect, useContext } from 'react';
import SinglePersonHeader from './SinglePersonHeader';
import SinglePersonRoles from './SinglePersonRoles';
import PeopleContext from '../context/people/peopleContext';
import FavoriteButton from './FavoriteButton';

const SinglePersonPage = () => {
    const id = window.location.pathname.split('/')[2];

    const peopleContext = useContext(PeopleContext);
    const { person, getPersonById, personIsLoaded } = peopleContext;

    useEffect(() => {
        getPersonById(id);
        window.scrollTo({ top: 0, behavior: 'auto' });
        // eslint-disable-next-line
    }, [id])

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
                        title={person.name}
                    >
                        <FavoriteButton
                            image={person.profile_path}
                            title={person.name}
                        />
                    </SinglePersonHeader>

                    <SinglePersonRoles
                        mainTitle='Roles Played'
                        array={person.movie_credits.cast}
                    />
                </div>
            }
        </div>
    )
}


export default SinglePersonPage;
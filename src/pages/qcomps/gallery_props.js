function Profile({person}) {
    return(
      <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={'https://i.imgur.com/' + person.imageId + '.jpg'}
          alt={person.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards.split(',').length} </b>
            {person.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
    )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
        <Profile 
          person={{name: 'Maria Skłodowska-Curie', imageId: 'szV5sdGs', profession: 'physicist and chemist', 
                  awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
                  discovered: 'polonium (element)'}}></Profile>

        <Profile 
        person={{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2s', awards: '(Miyake Prize for geochemistry, Tanaka Prize)',
                  profession: 'geochemist', discovered: 'a method for measuring carbon dioxide in seawater'}}></Profile>
    </div>
  );
}

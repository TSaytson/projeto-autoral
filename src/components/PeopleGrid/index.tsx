import { Person as PersonModel } from '@prisma/client';
import Person from '../Person';

type Props = {
  people: PersonModel[]
}
export default function ResourcesGrid({people}: Props) {
  console.log('dentro da resourcesgrid', people);
  return (
    <div className="flex flex-wrap gap-7">
      {people.map(person => (
        <Person
          key={person.id}
          link=''
          imageUrl='https://www.achurchconsulting.com/wp-content/uploads/2021/02/remote-work-models.png'
          {...person}
        />
      ))}
    </div>
  )
}
import Image from 'next/image'
import { cookies } from 'next/headers'
import { Configuration, ProjectApi } from '@/api';

const cookieStore = cookies()

const apiClient = new ProjectApi(new Configuration({
  basePath: 'http://localhost:8000/',
  // headers: {
  //     'X-CSRFToken': cookieStore.get('csrftoken'),
  // }
}));

export default async function Home() {

  const data = await apiClient.projectList();
  console.log(data);

  return (
    <div>
      <h1>My Homepage</h1>
      <p>My homepage content.</p>
      {data.map((d) => {
        return (
          <div key={d.id}>
            <h1>{d.name}</h1>
            <p>{d.description}</p>
          </div>
        )
      })}
    </div>
  )
}

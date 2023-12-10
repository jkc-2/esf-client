import Image from 'next/image'
import { cookies } from 'next/headers'
import { Configuration, ProjectApi } from '@/api';

import Link from 'next/link';

const cookieStore = cookies()

const apiClient = new ProjectApi(new Configuration({
  basePath: 'http://localhost:8000/',
  // headers: {
  //     'X-CSRFToken': cookieStore.get('csrftoken'),
  // }
}));

export default async function Home() {

  const data = await apiClient.projectList();
  // console.log(data);

  return (
    <div>
      <h1>My Homepage</h1>
      <p>My homepage content.</p>
      {/* <Table 
      headers={["#", "Nom", "Description", "Créé le", "Créé par"]}
      data={data.map((d) => {return [d.id, d.name, d.description, d.created_at, d.created_by]})}
      /> */}
      <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Nom</th>
                  <th scope="col" className="px-6 py-4">Description</th>
                  <th scope="col" className="px-6 py-4">Créé le</th>
                  <th scope="col" className="px-6 py-4">Créé par</th>
                </tr>
              </thead>
              <tbody>
                {
                    data ? 
                    data.map((row, i) => {
                        return (
                        
                            <tr
                                key={i}
                                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                                >
                                <td className="whitespace-nowrap px-6 py-4"><Link style={{width:"100%"}} href={`/project/${row.id}`}>{row.id}</Link></td>
                                <td className="whitespace-nowrap px-6 py-4"><Link style={{width:"100%"}} href={`/project/${row.id}`}>{row.name}</Link></td>
                                <td className="whitespace-nowrap px-6 py-4"><Link style={{width:"100%"}} href={`/project/${row.id}`}>{row.description}</Link></td>
                                <td className="whitespace-nowrap px-6 py-4"><Link style={{width:"100%"}} href={`/project/${row.id}`}>{row.createdAt.toDateString()}</Link></td>
                                <td className="whitespace-nowrap px-6 py-4"><Link style={{width:"100%"}} href={`/project/${row.id}`}>{row.createdByEmail}</Link></td>
                            </tr>
                        )
                    })
                    :
                    <tr
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4"></td>
                    </tr>
                }
                {/* <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td className="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td className="whitespace-nowrap px-6 py-4">Larry</td>
                  <td className="whitespace-nowrap px-6 py-4">Wild</td>
                  <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                </tr> */}
              </tbody>
            </table>
    </div>
  )
}

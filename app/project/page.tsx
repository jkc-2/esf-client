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
      <h1>Liste des projets</h1>
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
              </tbody>
            </table>
    </div>
  )
}

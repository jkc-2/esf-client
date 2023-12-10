import React from "react";

import { Configuration, ProjectApi } from '@/api';


const apiClient = new ProjectApi(new Configuration({
  basePath: 'http://localhost:8000/',
  // headers: {
  //     'X-CSRFToken': cookieStore.get('csrftoken'),
  // }
}));

export default async function Project({ params }: { params: { projectId: integer } }){
    let project = await apiClient.projectRetrieve({"id": params.projectId});

    return (
        <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        </div>
    );
};
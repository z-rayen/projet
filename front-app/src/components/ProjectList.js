import React, { Component } from 'react';


class ProjectList extends Component {
  render() {
    const projects = [
      // Fill this array with your project data
    ];

    return (
      <section>
        <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
          <div class="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Pages</h2>
           
           
          </div>
         
        </header>
        <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
          {projects.map(project => (
            <li key="#">
              <a href="#" className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="group-hover:text-white font-semibold text-slate-900">
                      {project.title}
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">{project.category}</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd>
                      {project.users.map(user => (
                        <img key={user.id} src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy" />
                      ))}
                    </dd>
                  </div>
                </dl>
              </a>
            </li>
          ))}
          <li className="flex">
            <a href="/new" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
              <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New page
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default ProjectList;

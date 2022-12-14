import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <div className='rounded-lg shallow-lg card bg-base-100'>
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Reposotories
        </h2>
          {repos.map((repo) => {
            return (
              // <h3>{repo.name}</h3>
              <RepoItem repo={repo}  key={repo.name}/>
            ) 
          })}
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList
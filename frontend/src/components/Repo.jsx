import Rep from "./Rep";


const Repo = ({repos, alwaysFull}) => { 

	const className = alwaysFull ? "w-full" : "lg:w-2/3 w-full";
    
	return (
		<div className={`${className} bg-glass rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200'>
				
                {repos.map((repo) => (
                    <Rep key={repo.id} repo={repo} />
                ))}
                
                {repos.length === 0 && <p className="flex justify-center items-center h-32">No Repository Found!!!</p> }
			</ol>
		</div>
	);
};

export default Repo
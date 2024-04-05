import Rep from "./Rep";


const Repo = () => {
	return (
		<div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200'>
				<Rep />
				<Rep />
				<Rep />
			</ol>
		</div>
	);
};

export default Repo
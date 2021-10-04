import React, {useState} from 'react';


const Home = () => {
    const [message, setMessage] = useState('Coucou');
    return (

        <main>
        	<div class="container">
        		<div class="row">
	        		<div class="col-2"></div>
	        		<div class="col-8">
        		        <div>
            				<h1>{message} les gens</h1>
            				<button onClick={() => setMessage('bonjour')}>bouh</button>
    					</div>
    				</div>
	        		<div class="col-2"></div>
	        	</div>
        	</div>
        </main>

    )
}
export default Home;
import React, {useState} from 'react';
import Header from './Header';


const Home = () => {
    const [message, setMessage] = useState('Coucou');
    return (

        <div>
        <Header/>
        	<div class="container">
        		<div class="row">
                    <div class="col"></div>
                    <div class="col-8 tableau">
                        <div class="row match">
        	        		<div class="col-4">
                                <div class="team-logo"><img src="https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/361px-Warriors_de_Golden_State_logo.svg.png"/></div>
                                <div class="team-name"><h2>lorem ipsum</h2></div>
                            </div>
        	        		<div class="col-4 score">
                                <h4>X - X</h4>
            				</div>
        	        		<div class="col-4">
                                <div class="team-logo"><img src="https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/361px-Warriors_de_Golden_State_logo.svg.png" /></div>
                                <div class="team-name"><h2>lorem ipsum</h2></div>
                            </div>
                        </div>
                    </div>
                    <div class="col"></div>
	        	</div>
        	</div>
        </div>

    )
}
export default Home;
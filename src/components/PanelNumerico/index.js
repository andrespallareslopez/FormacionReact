

import './style.scss'

function PanelNumerico(){
    
     
    return (
    <>
 <div id="loader01" className="loader-progress-01 content">
    <div id='calc01'>
    	<div id='entrada'>
    		<div id='cajasuperior'></div>
    		<div id='imgclose'></div>
    		<div id='cajatexto'>
    			<input type='text' name='txtnumeros' id='txtnumero' placeholder='introducir numero' />
    		</div>
    	</div>
        <div id='numeros'>
        	<div id='btncero'><span>CE</span></div>
        	    
        	<div id='btnborrar'></div>
        	<div id='btn7'>
        		<span>7</span>
        	</div>
        	<div id='btn8'>
        		<span>8</span>
        	</div>
        	<div id='btn9'>
        		<span>9</span>
        	</div>
        	<div id='btn4'>
        		<span>4</span>
        	</div>
        	<div id='btn5'>
        		<span>5</span>
        	</div>
        	<div id='btn6'>
        		<span>6</span>
        	</div>
        	<div id='btn1'>
        		<span>1</span>
        	</div>
        	<div id='btn2'>
        		<span>2</span>
        	</div>
        	<div id='btn3'>
        		<span>3</span>
        	</div>
        	<div id='btn0'>
        		<span>0</span>
        	</div>
        	<div id='btnpunto'>
        		<span>.</span>
        	</div>
        </div>
    </div>
	</div>
    </>         
    )

}


export default PanelNumerico
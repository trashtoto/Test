

// Radiateurs

Var FirstRange = {
	    start: ’18:20:00',
	    end: '18:22:00' 
};
 

gladys.time.isInTimeRange(FirstRange)
      .then(function(isInTimeRange){
          if(isInTimeRange){
		deviceType: {
		   	id: 1,
      			identifier: '192.168.1.100',
      			type: 'binary',
      			name: 'Chauffage'
   		},
   		state: {
     			value: 1
   		}				
          }else{
		deviceType: {
		   	id: 1,
      			identifier: '192.168.1.100',
      			type: 'binary',
      			name: 'Chauffage'
   		},
   		state: {
     			value: 0
   		}			
          }
});
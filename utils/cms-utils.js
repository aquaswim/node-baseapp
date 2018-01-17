let config=require('../config/config');

module.exports={
	gen_data:function(data){
		if(!data.title)
			data.title=config.site_name;
		if(data.pagename)
			data.title+=(' | '+data.pagename);
		
		return data;
	}
};
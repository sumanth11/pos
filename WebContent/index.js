function generatePOS() {
	var data = $('#comment').val();

	if(data) {
		var request = $.post('api/pos', {"data": data}); 

		request.success(function (parsedTokens) {
			var html = '';
			for (var i = 0; i < parsedTokens.length; i++) {
				var parsedToken = parsedTokens[i];
				html = html + '<span class="span">';
				html = html + '<span class="label ' + parsedToken.tag + '">' + parsedToken.tag + '</span>';
				html = html + '<span class="token ' + parsedToken.tag + '">' + parsedToken.token + '</span>';
				html = html + '</span>';
			}

			$('#output').html(html);
			$('#outputDiv').show();
		});

		request.fail(function() {
			$('#outputDiv').hide();
		});
	} else {
		$('#outputDiv').hide();
	}
}
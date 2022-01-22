
$(function(){
    bLazy.revalidate();
    
    $.ajax({
        type: 'GET',
        dataType: 'json',
        cache: false,
        url: '[INSTAGRAM_API]',
        success: function(data){
            $('.instagram-account>p span.count strong').html(data.graphql.user.edge_owner_to_timeline_media.count);
            $('.instagram-account>p span.follower strong').html(data.graphql.user.edge_follow.count);
            $('.instagram-account>p span.followed strong').html(data.graphql.user.edge_followed_by.count);
            for(var i = 0; i < 12; i++){
                $('<div class="item"><a target="_blank" href="https://www.instagram.com/p/' + data.graphql.user.edge_owner_to_timeline_media.edges[i].node.shortcode +'"><div class="lazy loading"><img src="images/spacer.gif" data-src="'+ data.graphql.user.edge_owner_to_timeline_media.edges[i].node.thumbnail_src +'" class="b-lazy" width="160" height="160" alt="Instagram Last Posts"></div></a></div>').appendTo('.instagram-feed');
            }
            bLazy.revalidate();
        }
    });
});

var bLazy = new Blazy({
	breakpoints: [{
		src: 'data-src'
	}],
	success: function(element){
		setTimeout(function(){
			var parent = element.parentNode;
			parent.className = parent.className.replace(/\bloading\b/,'');
		}, 200);
	}
});

$(window).on('load',function(){
	bLazy.revalidate();
});
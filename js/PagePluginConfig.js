$( document ).ready(function() {
    
    $.fn.pageConfig('default', {
        totalNumber : $('input[name=totalNumber]').val(),
        rangePage : $('input[name=rangePage]').val(),
        pageNumber : $('input[name=pageNumber]').val(),
        nowPage : $('input[name=nowPage]').val()
    });
    
    $('#PageGet').pagePlugin(function(r){
        var result = '';
        result += this.genPage('<a href="{url}?page={prevPage}{params}" >prev</a>&nbsp;');
        result += this.genLoopPage(
                    '<a href="{url}?page={page}{params}" >{page}</a>&nbsp;',
                    '{page}&nbsp;'
                  );
        result += this.genPage('<a href="{url}?page={nextPage}{params}" >next</a>&nbsp;總共:{totalNumber}筆');
        return result;
    });

});
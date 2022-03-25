## 버튼 클릭시 show & hide

```jsp
$(document).ready(
	function() {
        $('#id1').hide();
        $('#cancel').hide();
        $('#findImg').hide();
        $('#space').hide();

        $('#mod_start').click(function() {
            $('#space').show();
            $('#del').hide();
            $('#mod_start').hide();
            $('#to_list').hide();
            $('#findImg').show();
            $('#id1').show();
            $('#cancel').show();
            $('#rTitle').prop('disabled', false);
            $('#rContents').prop('disabled', false);
            return false;
        });

        $('#cancel').click(
            function() {
                $('#space').hide();
                $('#del').show();
                $('#mod_start').show();
                $('#to_list').show();
                $('#findImg').hide();
                $('#id1').hide();
                $('#cancel').hide();
                $('#rTitle').prop('disabled', true);
                $('#rContents').prop('disabled', true);
                $('#preview').attr('src', '${contextPath}/downRImg?		                                   reqNO=${requestInfo.reqNO}');
                return false;
            }
		);

	});
```


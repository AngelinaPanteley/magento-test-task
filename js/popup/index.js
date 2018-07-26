$j(document).ready(function() {
  $j('#personolize-btn').click(function(e) {
    $j('#personolize-popup').addClass('show');
    $j('input:radio[name="color"]').val('Rosso');
    $j('input:radio[name="font"]').val('Sans');
    $j('#personolize-close').click(function() {
      $j('#personolize-popup').removeClass('show');
    });
  });

  $j('input:radio[name="color"]').change(function(){
    const value = $j(this).val();
    const attr = $j(this).attr('data-color');
    $j('#for-radio-color').html(value);
    $j('#personolize-text').css('color', attr);
  });

  $j('input:radio[name="font"]').change(function(){
    const value = $j(this).val();
    const attr = $j(this).attr('data-font');
    $j('#for-radio-font').html(value);
    $j('#personolize-text').css('font-family', attr);
  });

  let length = 0;
  $j('#first-line-input').keyup(function() {
    const value = $j(this).val();
    length = value.length + $j('#second-line-input').val().length;
    if(length <= 20) {
      $j('#first-line').html(value);
      $j('#counter').html(length);
    } else {
      $j(this).val(value.slice(0,-1));
    }
  })
  $j('#second-line-input').keyup(function() {
    const value = $j(this).val();
    length = value.length + $j('#first-line-input').val().length;
    if(length <= 20) {
      $j('#second-line').html(value);
      $j('#counter').html(length);
    } else {
      $j(this).val(value.slice(0,-1));
    }
  })
});
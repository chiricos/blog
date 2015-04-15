alert('jfads');
$(document).on("ready",function()
{
   $('.web').on('mouseover',function()
   {
      $('.menu-web-y-app').removeClass('hidden');
   });
   $('.web').on('mouseout',function()
   {
      $('.menu-web-y-app').addClass('hidden');
   });

   $('.branding').on('mouseover',function()
   {
      $('.menu-branding').removeClass('hidden');
   });
   $('.branding').on('mouseout',function()
   {
      $('.menu-branding').addClass('hidden');
   });

   $('.marketing').on('mouseover',function()
   {
      $('.menu-marketing').removeClass('hidden');
   });
   $('.marketing').on('mouseout',function()
   {
      $('.menu-marketing').addClass('hidden');
   });

   $('.produccion').on('mouseover',function()
   {
      $('.menu-produccion').removeClass('hidden');
   });
   $('.produccion').on('mouseout',function()
   {
      $('.menu-produccion').addClass('hidden');
   });

});
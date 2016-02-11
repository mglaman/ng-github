describe('testing github provider', function() {
  var GitHub, $httpBackend;

   beforeEach(inject(function (_$httpBackend_, _GitHub_) {
     $httpBackend = _$httpBackend_;
     GitHub = _GitHub_;
   }));

   it('should have GitHub provider defined', function () {
     expect(GitHub).toBeDefined();
   });

   it('test', function() {
     GitHub.getOrg('commerceguys').get(function(response) {
       expect(response.login).toEqual('drupalcommerce');
     });
   });
});

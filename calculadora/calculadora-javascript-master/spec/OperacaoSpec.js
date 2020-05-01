describe("Operações", function() {
  
  beforeEach(function() {
    
  });

  afterEach(function(){
    $("#resultado").val("");
  });

  describe("Botão de Resultado", function(){
    
    it("deve responder corretamente a soma", function(){
      var num1 = Math.random() * 10;
      var num2 = Math.random() * 10;
      $("#resultado").val(num1+"+"+num2);
      $("button.resultar").click();

      expect($("#resultado").val()).toBe(num1+num2+'');
    });

    it("deve responder corretamente a subtração", function(){
      var num1 = Math.random() * 10;
      var num2 = Math.random() * 10;
      $("#resultado").val(num1+"-"+num2);
      $("button.resultar").click();
      expect($("#resultado").val()).toBe(num1-num2+'');
    });

    it("deve responder corretamente a multiplicação", function(){
      var num1 = Math.floor(Math.random() * 10);
      var num2 = Math.floor(Math.random() * 10);
      $("#resultado").val(num1+"*"+num2);
      $("button.resultar").click();
      expect($("#resultado").val()).toBe(num1*num2+'');
    });

    it("deve responder corretamente a divisão", function(){
      var num1 = Math.floor(Math.random() * 10);
      var num2 = Math.floor(Math.random() * 10);
      $("#resultado").val(num1+"/"+num2);
      $("button.resultar").click();
      expect($("#resultado").val()).toBe(num1/num2+'');
    });

    it("deve colocar a mensagem 'Erro de operação' caso não tenha número a direita.", function(){
      $("#resultado").val("5/");
      $("button.resultar").click();
      expect($("#resultado").val()).toBe("Erro de operação");
    });

    it("deve manter o número caso só haja o número da esquerda", function(){
      $("#resultado").val("57.5");
      $("button.resultar").click();
      expect($("#resultado").val()).toBe("57.5");
    });

  });

  describe("Botões de Operação", function(){

    describe("Clique nos botões", function(){

      it("Não deve adicionar operação se não houver números.", function(){
        $("button.operacao.somar").click();
        expect($("#resultado").val()).toBe("");
      });

      it("deve adicionar a operação de soma se já houver número e clicar no botão soma", function(){
        $("#resultado").val("5");
        $("button.operacao.somar").click();
        expect($("#resultado").val().substring(1)).toBe("+");
      });

      it("deve adicionar a operação de subtração se já houver número e clicar no botão subtração", function(){
        $("#resultado").val("5");
        $("button.operacao.subtrair").click();
        expect($("#resultado").val().substring(1)).toBe("-");
      });

      it("deve adicionar a operação de multiplicação se já houver número e clicar no botão multiplicação", function(){
        $("#resultado").val("5");
        $("button.operacao.multiplicar").click();
        expect($("#resultado").val().substring(1)).toBe("*");
      });

      it("deve adicionar a operação de divisão se já houver número e clicar no botão divisão", function(){
        $("#resultado").val("5");
        $("button.operacao.dividir").click();
        expect($("#resultado").val().substring(1)).toBe("/");
      });

      it("não deve adicionar operação se já houver operação antes.", function(){
        $("#resultado").val("5+");
        $("button.operacao.dividir").click();
        expect($("#resultado").val()).toBe("5+");

        $("#resultado").val("5-3");
        $("button.operacao.somar").click();
        expect($("#resultado").val()).toBe("5-3");
      });
    });

  });

  describe("Botões de Número", function(){

    it("Clicar no botão de números deve adicionar o número no botão (incluindo o .)", function(){
      $("button.numero").each(function(){
        $(this).click();
        expect($("#resultado").val()).toBe($(this).text());
        $("#resultado").val("");
      });
    })

    it("não deve adicionar dois pontos seguidos.", function(){
      $("button.numero:contains(.)").click();
      expect($("#resultado").val()).toBe(".");
      $("button.numero:contains(.)").click();
      expect($("#resultado").val()).toBe(".");
    });

    it("só deve permitir um ponto por número (esquerda ou direita)", function(){
      $("#resultado").val("25");
      $("button.numero:contains(.)").click();
      expect($("#resultado").val()).toBe("25.");

      $("#resultado").val("25.3");
      $("button.numero:contains(.)").click();
      expect($("#resultado").val()).toBe("25.3");

      $("#resultado").val("25.3-3");
      $("button.numero:contains(.)").click();
      expect($("#resultado").val()).toBe("25.3-3.");

      $("#resultado").val("25.3-3.4");
      $("button.numero:contains(.)").click();
      expect($("#resultado").val()).toBe("25.3-3.4");      
    });

  });

});

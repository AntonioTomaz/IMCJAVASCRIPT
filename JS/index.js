
			for (var i = 0; i < 1; i++) {	
								
				var paciente = document.querySelector(".info-imc");
				var valor = paciente.textContent;
							

				if (valor == 0) {
					var paciente = document.querySelector("#primeiro-paciente");

					var tdPeso = paciente.querySelector(".info-peso");
					var peso   = tdPeso.textContent;

					var tdAltura = paciente.querySelector(".info-altura");
					var altura   = tdAltura.textContent;

					var imc =  peso / (altura * altura);
					console.log(imc);

	     			var tdImc = paciente.querySelector(".info-imc");
					tdImc.textContent = Math.trunc(imc);



					var paciente = document.querySelector("#segundo-paciente");

					var tdPeso = paciente.querySelector(".info-peso");
					var peso   = tdPeso.textContent;

					var tdAltura = paciente.querySelector(".info-altura");
					var altura   = tdAltura.textContent;

					var imc =  peso / (altura * altura);
					console.log(imc);

	     			var tdImc = paciente.querySelector(".info-imc");
					tdImc.textContent = Math.trunc(imc);


					var paciente = document.querySelector("#terceiro-paciente");

					var tdPeso = paciente.querySelector(".info-peso");
					var peso   = tdPeso.textContent;

					var tdAltura = paciente.querySelector(".info-altura");
					var altura   = tdAltura.textContent;

					var imc =  peso / (altura * altura);
					console.log(imc);

	     			var tdImc = paciente.querySelector(".info-imc");
					tdImc.textContent = Math.trunc(imc);


					var paciente = document.querySelector("#quarto-paciente");

					var tdPeso = paciente.querySelector(".info-peso");
					var peso   = tdPeso.textContent;

					var tdAltura = paciente.querySelector(".info-altura");
					var altura   = tdAltura.textContent;

					var imc =  peso / (altura * altura);
					console.log(imc);

	     			var tdImc = paciente.querySelector(".info-imc");
					tdImc.textContent = Math.trunc(imc);

					var paciente = document.querySelector("#quinto-paciente");

					var tdPeso = paciente.querySelector(".info-peso");
					var peso   = tdPeso.textContent;

					var tdAltura = paciente.querySelector(".info-altura");
					var altura   = tdAltura.textContent;

					var imc =  peso / (altura * altura);
					console.log(imc);

	     			var tdImc = paciente.querySelector(".info-imc");
					tdImc.textContent = Math.trunc(imc);


				}

			}
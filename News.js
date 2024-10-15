function expand(id, url) {
            var element = document.getElementById(id);

            // Remove classes if already present to allow for repeated clicks
            element.classList.remove('expand');
            element.classList.remove('shrink');

            // Trigger reflow to apply the class again
            void element.offsetWidth;

            // Add the expand class to trigger the animation
            element.classList.add('expand');

            // Wait 0.3 segundos antes de redirecionar e encolher o elemento
            setTimeout(function() {
                element.classList.remove('expand');
                element.classList.add('shrink');

                setTimeout(function() {
                    window.location.href = url;  // Redirecionar após encolher
                }, 300);  // Esperar a animação de encolhimento concluir (0.3s)
            }, 300);  // Esperar 0.3 segundos antes de iniciar a animação de encolhimento
        }

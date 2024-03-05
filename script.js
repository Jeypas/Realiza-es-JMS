function showPresentation(building, password, preziLink) {
    var enteredPassword = prompt('Digite a senha para ' + building + ':');

    if (enteredPassword === password) {
        document.getElementById('selectionTitle').style.display = 'none';

        var buttons = document.getElementsByClassName('building-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = 'none';
        }

        var selectedSection = document.getElementById(building.toLowerCase());
        if (selectedSection) {
            selectedSection.style.display = 'block';
            var presentationContainer = selectedSection.getElementsByClassName('presentation-container')[0];
            presentationContainer.innerHTML = '<iframe src="' + preziLink + '" width="100%" height="800" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            document.getElementById('backButton').style.display = 'inline-block';
        }
    } else {
        alert('Senha incorreta!');
    }
}

function goBack() {
    document.getElementById('selectionTitle').style.display = 'block';

    var buttons = document.getElementsByClassName('building-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'inline-block';
    }

    var sections = document.getElementsByClassName('presentation-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
        var presentationContainer = sections[i].getElementsByClassName('presentation-container')[0];
        presentationContainer.innerHTML = ''; // Limpa o conteúdo do iframe
    }

    document.getElementById('backButton').style.display = 'none';
}
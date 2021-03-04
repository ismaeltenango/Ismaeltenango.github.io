


const requestURL = 'https://www.ahfx.com/person.php';

fetch (requestURL)
    .then(function (response){
        return response.json();
})

.then(function (jsonObject){
    console.table(jsonObject);
    const person = jsonObject['person'];

        let card = document.createElement('section');
        let name = document.createElement('h3');
        let password = document.createElement('p');
        let email = document.createElement('p');
        let city = document.createElement('p');
        let eye = document.createElement('p');
        let children = document.createElement('p');
        let ip = document.createElement('p');
        let image = document.createElement('img');

        image.setAttribute('src', 'https://thispersondoesnotexist.com/image', 'alt', person.personal.name + ' ' + person.personal.last_name);
        card.appendChild(image);

        name.textContent = person.personal.name + ' ' + person.personal.last_name;
        card.appendChild(name);

        password.textContent = 'Password: ' + person.online_info.password;
        card.appendChild(password);

        email.textContent = 'Email Address: ' +'  ' + person.online_info.email;
        card.appendChild(email)

        eye.textContent = 'Eye Color: ' +'  ' + person.personal.eye_color;
        card.appendChild(eye)
        
        city.textContent = 'City Country: ' +'  ' + person.personal.city;
        card.appendChild(city)

        ip.textContent = 'City Country: ' +'  ' + person.online_info.ip_address;
        card.appendChild(ip)
        if (person.marriage.married == false){
            children.textContent = 'Children: No Child He/She is ugly :\'c';
            card.appendChild(children)
        }
        else{
        children.textContent = 'Children: ' +'  ' + person.marriage.children;
        card.appendChild(children)
        }

        document.querySelector('div.cards').appendChild(card);
    
})

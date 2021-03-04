const express = require('express');
const app = express();
const port = 3000;

app.get('/instructor', (request, response) => {
    response.render('teacher.ejs', {
        instructor: 'Jessica',
        course_name: 'Backend 1',
        students: [
            'Kalle', 'Lina', 'Karro'
        ]
    });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}!`));

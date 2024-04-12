<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
        /* Inline CSS styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width : 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        p {
            margin-bottom : 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Resume</h1>
        <p>Name: <% = student.name %></p>
        <p>Email: <% = student.email %></p>
        <p>Phone: <%= student.phone %></p>
        <p>Education: <% = student.education %></p>
        <p>Skills: <% = student.skills %></p>
        <p>Experience: < % = student.experience % > </p>
    </div>
</body>
</html>
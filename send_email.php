<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'tekton.projetos01@gmail.com';
    $subject = 'Mensagem do site Tekton';
    $message_body = "Nome: $name\nEmail: $email\nMensagem:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $message_body, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => 'Mensagem enviada com sucesso!'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Ocorreu um erro ao enviar a mensagem.'));
    }
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Método de requisição inválido.'));
}
?>
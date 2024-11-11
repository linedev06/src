<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['videoFile'])) {
    // Diretório onde o vídeo será salvo
    $uploadDir = 'uploads/';
    
    // Obter nome do arquivo
    $videoFileName = basename($_FILES['videoFile']['name']);
    $videoFilePath = $uploadDir . $videoFileName;
    
    // Mover o arquivo para o diretório de upload
    if (move_uploaded_file($_FILES['videoFile']['tmp_name'], $videoFilePath)) {
        // Redirecionar para a página video.html com o caminho do vídeo como parâmetro
        header("Location: video.html?video=" . urlencode($videoFilePath));
        exit;
    } else {
        echo "Erro no upload do vídeo.";
    }
}
?>

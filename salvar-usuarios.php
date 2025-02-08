<?php
// Verificar se a requisição é POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receber dados JSON
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (isset($data['usuarios'])) {
        // Salvar no arquivo usuarios.json
        $resultado = file_put_contents('usuarios.json', json_encode([
            'usuarios' => $data['usuarios']
        ], JSON_PRETTY_PRINT));

        if ($resultado) {
            http_response_code(200);
            echo json_encode(['status' => 'sucesso']);
        } else {
            http_response_code(500);
            echo json_encode(['status' => 'erro', 'mensagem' => 'Não foi possível salvar os usuários']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'erro', 'mensagem' => 'Dados inválidos']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'erro', 'mensagem' => 'Método não permitido']);
}
?>

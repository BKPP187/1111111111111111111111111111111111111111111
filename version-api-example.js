/**
 * 版本检查API端点示例
 * 将此文件部署到你的服务器上，路径为 /api/version-check
 */

// Express.js 示例
app.get('/api/version-check', (req, res) => {
    // 设置CORS头，允许跨域请求
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    // 返回最新版本信息
    res.json({
        version: '1.0.7',  // 最新版本号
        latestVersion: '1.0.7',
        updateRequired: true,  // 是否强制更新
        updateMessage: '发现新版本，请立即更新以获得最佳体验',
        downloadUrl: window.location.origin,  // 更新下载地址
        releaseNotes: [
            '修复了聊天界面的显示问题',
            '优化了应用启动速度',
            '增加了新的表情包功能'
        ]
    });
});

// 或者使用简单的静态JSON文件
// 创建 /api/version-check.json 文件：
/*
{
    "version": "1.0.7",
    "latestVersion": "1.0.7", 
    "updateRequired": true,
    "updateMessage": "发现新版本，请立即更新以获得最佳体验",
    "downloadUrl": "https://your-domain.com",
    "releaseNotes": [
        "修复了聊天界面的显示问题",
        "优化了应用启动速度", 
        "增加了新的表情包功能"
    ]
}
*/

// 或者使用PHP示例
/*
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$versionInfo = [
    'version' => '1.0.7',
    'latestVersion' => '1.0.7',
    'updateRequired' => true,
    'updateMessage' => '发现新版本，请立即更新以获得最佳体验',
    'downloadUrl' => 'https://your-domain.com',
    'releaseNotes' => [
        '修复了聊天界面的显示问题',
        '优化了应用启动速度',
        '增加了新的表情包功能'
    ]
];

echo json_encode($versionInfo);
?>
*/

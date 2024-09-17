const { Client, RichPresence, CustomStatus, SpotifyRPC } = require('discord.js-selfbot-v13');
const client = new Client();
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const os = require('os');

client.on('ready', async () => {
  console.log(`${client.user.username}は準備完了！`);
  updateStatus();
  setInterval(updateStatus, 10 * 1000);
});

async function updateStatus() {
  const batteryStatus = await getBatteryStatus();
  const memoryUsage = getMemoryUsage();

  if (batteryStatus) {
    const chargingStatus = batteryStatus.plugged === 'PLUGGED_AC' ? 
                           (batteryStatus.status === 'CHARGING' ? '充電中⚡' : 'AC接続中') : 
                           (batteryStatus.status === 'DISCHARGING' ? '放電中🔋' : 'USB接続中');

    const getExtendURL = await RichPresence.getExternal(
      client,
      '1276713870148370455',
      '画像url',//.png .jpg 等
    );
　　　//　メモリ使用量は${memoryUsage.used} メモリサイズは${memoryUsage.total} バッテリー残量は${batteryStatus.percentage} 充電中か否かは${chargingStatus}
    const status = new RichPresence(client)
      .setApplicationId('367827983903490050')//変更なし
      .setType('streaming')//変更なし
      .setURL('https://www.twitch.tv/kamito_jp') //変更なし
      .setState(` メモリ使用量: ${memoryUsage.used}MB / ${memoryUsage.total}MB`)
      .setName('テンプレート')
      .setDetails(`バッテリー: ${batteryStatus.percentage}% | ${chargingStatus}`)
      .setParty({ max: 1000, current: 1 })
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage(getExtendURL[0].external_asset_path)
      .setAssetsLargeText(`テンプレート`)
      .setAssetsSmallImage('373370493127884800')
      .setAssetsSmallText('テンプレート')
      .addButton('ボタン1', 'url')//好きな指定
      //.addButton('ボタン2', 'url');//上に同じく
//ボタンを二つ目使いたいときは//消して
    const custom = new CustomStatus(client)
      //.setEmoji('<:nachoComfy:1030908570700615690>')//絵文字を入れれる 入れるときはidで
      .setState(`バッテリー: ${batteryStatus.percentage}% | ${chargingStatus}`);//好きな指定

    const spotify = new SpotifyRPC(client)
      .setAssetsLargeImage('spotify:ab67616d00001e02768629f8bc5b39b68797d1bb')
      .setAssetsSmallImage('spotify:ab6761610000f178049d8aeae802c96c8208f3b7')
      .setAssetsLargeText('テンプレート')
      .setState('テンプレート')
      .setDetails('テンプレート')
      .setStartTimestamp(Date.now())
      .setEndTimestamp(Date.now() + 1000 * (990 * 60 + 99))//時間
      .setSongId('6eBiZCdAjVkcuW4h3F94iV')//変更なし
      .setAlbumId('2HmlBFz06FldsdzwY1FHg4')//変更なし
      .setArtistIds('4p8QoUNI7mWCCPqhtvUeG3', '6HsCnf0xpVFfDiS4Sa7r8T');//変更なし

    client.user.setPresence({ 
      activities: [status, custom, spotify], 
      status: batteryStatus.plugged === 'PLUGGED_AC' ? 'online' : 'idle' 
    });
  } else {
    console.error('バッテリー情報の取得に失敗しちゃったみたい…');
  }
}

async function getBatteryStatus() {
  try {
    const { stdout, stderr } = await exec('termux-battery-status');
    if (stderr) {
      console.error(`エラー発生: ${stderr}`);
      return null;
    }
    return JSON.parse(stdout);
  } catch (error) {
    console.error(`バッテリー情報の取得エラー: ${error}`);
    return null;
  }
}

function getMemoryUsage() {
  const totalMem = Math.round(os.totalmem() / (1024 * 1024));
  const freeMem = Math.round(os.freemem() / (1024 * 1024));
  const usedMem = totalMem - freeMem;

  return { total: totalMem, used: usedMem };
}

client.login('token');

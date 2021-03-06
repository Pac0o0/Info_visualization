function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    
    screen.init( volume, {
        width: window.innerWidth,
        height: window.innerHeight,
        enableAutoResize: false
    });
    
    var bounds = Bounds( volume );
    screen.scene.add( bounds );
    
    var point = new THREE.Vector3(60,60,17);
    var normal = new THREE.Vector3(1,1,1);
    var surfaces = Slice( volume, point, normal );
    screen.scene.add( surfaces );
    
    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });
    
    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });
    
    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    screen.scene.add( light );
    
    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('phong.vert').text,
        fragmentShader: document.getElementById('phong.frag').text,
    });
    
    screen.loop();
}



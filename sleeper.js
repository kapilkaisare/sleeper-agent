var sleeper = ( function () {
	var	isSleeperOn = false,
		_on = function () {
			isSleeperOn = true;
		},
		_off = function () {
			isSleeperOn = false;
		},

		streams = {
			'CONSOLE': console
		},
		selectedStream = streams[ 'CONSOLE' ],
		_addStream = function ( streamName, streamObject ) {
			streams[streamName] = streamObject;
		},
		_removeStream = function ( streamName ) {
			if ( streams[ streamName ] ) {
				delete streams[ streamName ];
			}
		},
		_setStream = function ( streamName ) {
			if ( streams[ streamName ] ) {
				selectedStream = streams[ streamName ];
			} else {
				// throw some error
			}
		},

		_log = function ( args ) {
			if ( isSleeperOn && selectedStream.log ) {
				selectedStream.log( args );
			}
		},
		_dir = function ( args ) {
			if ( isSleeperOn && selectedStream.dir ) {
				selectedStream.dir( args );
			}
		},
		_error = function ( args ) {
			if ( isSleeperOn && selectedStream.error ) {
				selectedStream.error( args );
			}
		},
		_warn = function ( args ) {
			if ( isSleeperOn && selectedStream.warn ) {
				selectedStream.warn( args );
			}
		};

	return {
		on: _on,
		off: _off,
		addStream: _addStream,
		removeStream: _removeStream,
		setStream: _setStream,
		log: _log,
		dir: _dir,
		error: _error,
		warn: _warn
	};
} ) ();
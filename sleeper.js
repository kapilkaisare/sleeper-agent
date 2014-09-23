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
				if ( streamName ) {
					throw new Error( "setStream(): a stream with name " + streamName + " was not found.");
				} else {
					throw new Error( "setStream(): first argument must be a stream name" );
				}
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
		},
		_trace = function () {
			if ( isSleeperOn && selectedStream.trace ) {
				selectedStream.trace();
			}
		},
		_count = function ( args ) {
			if ( isSleeperOn && selectedStream.count ) {
				selectedStream.count();
			}
		},
		_time = function ( args ) {
			if ( isSleeperOn && selectedStream.time ) {
				selectedStream.time();
			}
		},
		_timeEnd = function( args ) {
			if ( isSleeperOn && selectedStream.timeEnd ) {
				selectedStream.timeEnd();
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
		warn: _warn,
		trace: _trace,
		count: _count,
		time: _time,
		timeEnd: _timeEnd
	};
} ) ();

# PM2 Commands

```
  Usage: pm2 [cmd] app

  Options:

    -V, --version                                                output the version number
    -v --version                                                 print pm2 version
    -s --silent                                                  hide all messages
    --ext <extensions>                                           watch only this file extensions
    -n --name <name>                                             set a name for the process in the process list
    -m --mini-list                                               display a compacted list without formatting
    --interpreter <interpreter>                                  set a specific interpreter to use for executing app, default: node
    --interpreter-args <arguments>                               set arguments to pass to the interpreter (alias of --node-args)
    --node-args <node_args>                                      space delimited arguments to pass to node
    -o --output <path>                                           specify log file for stdout
    -e --error <path>                                            specify log file for stderr
    -l --log [path]                                              specify log file which gathers both stdout and stderr
    --filter-env [envs]                                          filter out outgoing global values that contain provided strings (default: )
    --log-type <type>                                            specify log output style (raw by default, json optional)
    --log-date-format <date format>                              add custom prefix timestamp to logs
    --time                                                       enable time logging
    --disable-logs                                               disable all logs storage
    --env <environment_name>                                     specify which set of environment variables from ecosystem file must be injected
    -a --update-env                                              force an update of the environment with restart/reload (-a <=> apply)
    -f --force                                                   force actions
    -i --instances <number>                                      launch [number] instances (for networked app)(load balanced)
    --parallel <number>                                          number of parallel actions (for restart/reload)
    --shutdown-with-message                                      shutdown an application with process.send('shutdown') instead of process.kill(pid, SIGINT)
    -p --pid <pid>                                               specify pid file
    -k --kill-timeout <delay>                                    delay before sending final SIGKILL signal to process
    --listen-timeout <delay>                                     listen timeout on application reload
    --max-memory-restart <memory>                                Restart the app if an amount of memory is exceeded (in bytes)
    --restart-delay <delay>                                      specify a delay between restarts (in milliseconds)
    --exp-backoff-restart-delay <delay>                          specify a delay between restarts (in milliseconds)
    -x --execute-command                                         execute a program using fork system
    --max-restarts [count]                                       only restart the script COUNT times
    -u --user <username>                                         define user when generating startup script
    --uid <uid>                                                  run target script with <uid> rights
    --gid <gid>                                                  run target script with <gid> rights
    --namespace <ns>                                             start application within specified namespace
    --cwd <path>                                                 run target script from path <cwd>
    --hp <home path>                                             define home path when generating startup script
    --wait-ip                                                    override systemd script to wait for full internet connectivity to launch pm2
    --service-name <name>                                        define service name when generating startup script
    -c --cron <cron_pattern>                                     restart a running process based on a cron pattern
    -w --write                                                   write configuration in local folder
    --no-daemon                                                  run pm2 daemon in the foreground if it doesn't exist already
    --source-map-support                                         force source map support
    --only <application-name>                                    with json declaration, allow to only act on one application
    --disable-source-map-support                                 force source map support
    --wait-ready                                                 ask pm2 to wait for ready event from your app
    --merge-logs                                                 merge logs from different instances but keep error and out separated
    --watch [paths]                                              watch application folder for changes (default: )
    --ignore-watch <folders|files>                               List of paths to ignore (name or regex)
    --watch-delay <delay>                                        specify a restart delay after changing files (--watch-delay 4 (in sec) or 4000ms)
    --no-color                                                   skip colors
    --no-vizion                                                  start an app without vizion feature (versioning control)
    --no-autorestart                                             start an app without automatic restart
    --no-treekill                                                Only kill the main process, not detached children
    --no-pmx                                                     start an app without pmx
    --no-automation                                              start an app without pmx
    --trace                                                      enable transaction tracing with km
    --disable-trace                                              disable transaction tracing with km
    --attach                                                     attach logging after your start/restart/stop/reload
    --v8                                                         enable v8 data collecting
    --event-loop-inspector                                       enable event-loop-inspector dump in pmx
    --deep-monitoring                                            enable all monitoring tools (equivalent to --v8 --event-loop-inspector --trace)
    -h, --help                                                   output usage information

  Commands:

    start [options] [name|namespace|file|ecosystem|id...]        start and daemonize an app
    trigger <id|proc_name|namespace|all> <action_name> [params]  trigger process action
    deploy <file|environment>                                    deploy your json
    startOrRestart <json>                                        start or restart JSON file
    startOrReload <json>                                         start or gracefully reload JSON file
    pid [app_name]                                               return pid of [app_name] or all
    create                                                       return pid of [app_name] or all
    startOrGracefulReload <json>                                 start or gracefully reload JSON file
    stop [options] <id|name|namespace|all|json|stdin...>         stop a process
    restart [options] <id|name|namespace|all|json|stdin...>      restart a process
    scale <app_name> <number>                                    scale up/down a process in cluster mode depending on total_number param
    profile:mem [time]                                           Sample PM2 heap memory
    profile:cpu [time]                                           Profile PM2 cpu
    reload <id|name|namespace|all>                               reload processes (note that its for app using HTTP/HTTPS)
    id <name>                                                    get process id by name
    inspect <name>                                               inspect a process
    delete|del <name|id|namespace|script|all|json|stdin...>      stop and delete a process from pm2 process list
    sendSignal <signal> <pm2_id|name>                            send a system signal to the target process
    ping                                                         ping pm2 daemon - if not up it will launch it
    updatePM2                                                    update in-memory PM2 with local PM2
    update                                                       (alias) update in-memory PM2 with local PM2
    install|module:install [options] <module|git:/>              install or update a module and run it forever
    module:update <module|git:/>                                 update a module and run it forever
    module:generate [app_name]                                   Generate a sample module in current folder
    uninstall|module:uninstall <module>                          stop and uninstall a module
    package [target]                                             Check & Package TAR type module
    publish|module:publish [options] [folder]                    Publish the module you are currently on
    set [key] [value]                                            sets the specified config <key> <value>
    multiset <value>                                             multiset eg "key1 val1 key2 val2
    get [key]                                                    get value for <key>
    conf [key] [value]                                           get / set module config values
    config <key> [value]                                         get / set module config values
    unset <key>                                                  clears the specified config <key>
    report                                                       give a full pm2 report for https://github.com/Unitech/pm2/issues
    link [options] [secret] [public] [name]                      link with the pm2 monitoring dashboard
    unlink                                                       unlink with the pm2 monitoring dashboard
    monitor [name]                                               monitor target process
    unmonitor [name]                                             unmonitor target process
    open                                                         open the pm2 monitoring dashboard
    plus|register [options] [command] [option]                   enable pm2 plus
    login                                                        Login to pm2 plus
    logout                                                       Logout from pm2 plus
    dump|save [options]                                          dump all processes for resurrecting them later
    cleardump                                                    Create empty dump file
    send <pm_id> <line>                                          send stdin to <pm_id>
    attach <pm_id> [comman]                                      attach stdin/stdout to application identified by <pm_id>
    resurrect                                                    resurrect previously dumped processes
    unstartup [platform]                                         disable the pm2 startup hook
    startup [platform]                                           enable the pm2 startup hook
    logrotate                                                    copy default logrotate configuration
    ecosystem|init [mode]                                        generate a process conf file. (mode = null or simple)
    reset <name|id|all>                                          reset counters for process
    describe <name|id>                                           describe all parameters of a process
    desc <name|id>                                               (alias) describe all parameters of a process
    info <name|id>                                               (alias) describe all parameters of a process
    show <name|id>                                               (alias) describe all parameters of a process
    env <id>                                                     list all environment variables of a process id
    list|ls                                                      list all processes
    l                                                            (alias) list all processes
    ps                                                           (alias) list all processes
    status                                                       (alias) list all processes
    jlist                                                        list all processes in JSON format
    sysmonit                                                     start system monitoring daemon
    slist|sysinfos [options]                                     list system infos in JSON
    prettylist                                                   print json in a prettified JSON
    monit                                                        launch termcaps monitoring
    imonit                                                       launch legacy termcaps monitoring
    dashboard|dash                                               launch dashboard with monitoring and logs
    flush [api]                                                  flush logs
    reloadLogs                                                   reload all logs
    logs [options] [id|name|namespace]                           stream logs file. Default stream all logs
    kill                                                         kill daemon
    pull <name> [commit_id]                                      updates repository for a given app
    forward <name>                                               updates repository to the next commit for a given app
    backward <name>                                              downgrades repository to the previous commit for a given app
    deepUpdate                                                   performs a deep update of PM2
    serve|expose [options] [path] [port]                         serve a directory over http via port
    autoinstall
    examples                                                     display pm2 usage examples
    *

pm2 deploy <configuration_file> <environment> <command>

  Commands:
    setup                run remote setup commands
    update               update deploy to the latest release
    revert [n]           revert to [n]th last deployment or 1
    curr[ent]            output current release commit
    prev[ious]           output previous release commit
    exec|run <cmd>       execute the given <cmd>
    list                 list previous deploy commits
    [ref]                deploy to [ref], the "ref" setting, or latest tag

```

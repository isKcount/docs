const e=JSON.parse('{"key":"v-5de9a039","path":"/zh/pip/docker/04.Docker-compose.html","title":"Docker-Compose\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"title":"Docker-Compose\u8BE6\u89E3","date":"2022-01-22T12:12:57.000Z","categories":["Docker"],"tags":["Docker"]},"excerpt":"","headers":[{"level":2,"title":"Docker Compose\u662F\u4EC0\u4E48","slug":"docker-compose\u662F\u4EC0\u4E48","link":"#docker-compose\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"Docker Compose \u7684\u80CC\u666F","slug":"docker-compose-\u7684\u80CC\u666F","link":"#docker-compose-\u7684\u80CC\u666F","children":[]},{"level":2,"title":"Docker Compose\u5B89\u88C5","slug":"docker-compose\u5B89\u88C5","link":"#docker-compose\u5B89\u88C5","children":[]},{"level":2,"title":"Docker Compose\u5E38\u7528\u547D\u4EE4","slug":"docker-compose\u5E38\u7528\u547D\u4EE4","link":"#docker-compose\u5E38\u7528\u547D\u4EE4","children":[{"level":3,"title":"docker-compose \u6307\u4EE4","slug":"docker-compose-\u6307\u4EE4","link":"#docker-compose-\u6307\u4EE4","children":[]},{"level":3,"title":"1.up \u6307\u4EE4","slug":"_1-up-\u6307\u4EE4","link":"#_1-up-\u6307\u4EE4","children":[]},{"level":3,"title":"2.down \u6307\u4EE4","slug":"_2-down-\u6307\u4EE4","link":"#_2-down-\u6307\u4EE4","children":[]},{"level":3,"title":"3.exec \u6307\u4EE4","slug":"_3-exec-\u6307\u4EE4","link":"#_3-exec-\u6307\u4EE4","children":[]},{"level":3,"title":"4.ps \u6307\u4EE4","slug":"_4-ps-\u6307\u4EE4","link":"#_4-ps-\u6307\u4EE4","children":[]},{"level":3,"title":"5.restart \u6307\u4EE4","slug":"_5-restart-\u6307\u4EE4","link":"#_5-restart-\u6307\u4EE4","children":[]},{"level":3,"title":"6.rm \u6307\u4EE4","slug":"_6-rm-\u6307\u4EE4","link":"#_6-rm-\u6307\u4EE4","children":[]},{"level":3,"title":"7.start \u6307\u4EE4","slug":"_7-start-\u6307\u4EE4","link":"#_7-start-\u6307\u4EE4","children":[]},{"level":3,"title":"8.stop \u6307\u4EE4","slug":"_8-stop-\u6307\u4EE4","link":"#_8-stop-\u6307\u4EE4","children":[]},{"level":3,"title":"9.top \u6307\u4EE4","slug":"_9-top-\u6307\u4EE4","link":"#_9-top-\u6307\u4EE4","children":[]},{"level":3,"title":"10.pause \u6307\u4EE4","slug":"_10-pause-\u6307\u4EE4","link":"#_10-pause-\u6307\u4EE4","children":[]},{"level":3,"title":"11.unpause \u6307\u4EE4","slug":"_11-unpause-\u6307\u4EE4","link":"#_11-unpause-\u6307\u4EE4","children":[]},{"level":3,"title":"12.logs \u6307\u4EE4","slug":"_12-logs-\u6307\u4EE4","link":"#_12-logs-\u6307\u4EE4","children":[]},{"level":3,"title":"\u67E5\u770B\u5E2E\u52A9","slug":"\u67E5\u770B\u5E2E\u52A9","link":"#\u67E5\u770B\u5E2E\u52A9","children":[]}]},{"level":2,"title":"Docker-compose \u6A21\u677F\u6307\u4EE4","slug":"docker-compose-\u6A21\u677F\u6307\u4EE4","link":"#docker-compose-\u6A21\u677F\u6307\u4EE4","children":[{"level":3,"title":"\u67E5\u770B\u7B2C\u4E00\u4E2A\u6A21\u677F","slug":"\u67E5\u770B\u7B2C\u4E00\u4E2A\u6A21\u677F","link":"#\u67E5\u770B\u7B2C\u4E00\u4E2A\u6A21\u677F","children":[]},{"level":3,"title":"\u67E5\u770B\u7B2C\u4E8C\u4E2A\u6A21\u677F","slug":"\u67E5\u770B\u7B2C\u4E8C\u4E2A\u6A21\u677F","link":"#\u67E5\u770B\u7B2C\u4E8C\u4E2A\u6A21\u677F","children":[]}]},{"level":2,"title":"Docker-compose\u6A21\u677F\u6307\u4EE4\u8BE6\u89E3","slug":"docker-compose\u6A21\u677F\u6307\u4EE4\u8BE6\u89E3","link":"#docker-compose\u6A21\u677F\u6307\u4EE4\u8BE6\u89E3","children":[{"level":3,"title":"build","slug":"build","link":"#build","children":[]},{"level":3,"title":"container_name","slug":"container-name","link":"#container-name","children":[]},{"level":3,"title":"comand","slug":"comand","link":"#comand","children":[]},{"level":3,"title":"depends_on","slug":"depends-on","link":"#depends-on","children":[]},{"level":3,"title":"env_file","slug":"env-file","link":"#env-file","children":[]},{"level":3,"title":"environment","slug":"environment","link":"#environment","children":[]},{"level":3,"title":"image","slug":"image","link":"#image","children":[]},{"level":3,"title":"ports","slug":"ports","link":"#ports","children":[]},{"level":3,"title":"volumes","slug":"volumes","link":"#volumes","children":[]},{"level":3,"title":"network","slug":"network","link":"#network","children":[]},{"level":3,"title":"healtheck","slug":"healtheck","link":"#healtheck","children":[]},{"level":3,"title":"sysctls","slug":"sysctls","link":"#sysctls","children":[]},{"level":3,"title":"ulimits","slug":"ulimits","link":"#ulimits","children":[]},{"level":3,"title":"compose\u7684build\u6307\u4EE4","slug":"compose\u7684build\u6307\u4EE4","link":"#compose\u7684build\u6307\u4EE4","children":[]},{"level":3,"title":"\u5916\u90E8\u547D\u4EE4","slug":"\u5916\u90E8\u547D\u4EE4","link":"#\u5916\u90E8\u547D\u4EE4","children":[]}]}],"git":{},"readingTime":{"minutes":8.4,"words":2519},"filePathRelative":"zh/pip/docker/04.Docker-compose.md","localizedDate":"2022\u5E741\u670822\u65E5"}');export{e as data};
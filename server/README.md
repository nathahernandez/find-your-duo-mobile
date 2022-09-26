# BACK END

## ENTIDADES


### JOGOS

- id : String
- title : String
- bannerURL : String

### AD

- id : String
- gameId : String
- name : String
- yearsPlaying : Number
- discordUser : String
- weekDays : Number
- hourStart : Number 
- hourEnd : Number
- useVoice : Boolean | 0 - 1
- createdAt : String | NewDate

### Casos de uso
- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncio por game
- Buscar discord por id do anúncio
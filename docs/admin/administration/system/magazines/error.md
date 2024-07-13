---
title: 'Журнал ошибок'
---

Журнал подключений расположен в модуле Администрирование. Данный журнал содержит все ошибки, возникшие в ходе работы (рис. 1(1)).

Ошибки делятся на следующие классы (колонка Класс объекта):  

- ошибки, возникшие на сервере –– ошибки отображены на белом фоне и входят в единственный класс «Исключение на сервере»;
- ошибки, возникшие на сервере и полученные клиентским приложением –– ошибки отображены на розовом фоне и входят в единственный класс «Исключение на сервере (от клиента)»;
- ошибки, возникшие на клиентском приложении – ошибки отображены на желтом фоне и входят в два класс: «Исключение на клиенте» и «Исключение на web-клиенте»;
- ошибки связи – ошибки отображены на голубом фоне и входят в два класса:
  - «Временное исключение связи» - связь с сервером прерывалась, но была восстановлена;
  - «Постоянное исключение связи» - связь с сервером прерывалась и не восстановилась;
  
![](img/error1.png)  
Рис. 1 Журнал ошибок  

В секции **След исключения** отображается java-код ошибки (рис. 1(2)). Информацию из данной секции можно скопировать и переслать в службу поддержки.

В секции **LSF след исключения** по некоторым ошибкам можно увидеть на каком действии возникла ошибка (рис. 1(3)).



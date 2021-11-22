CREATE DATABASE genesystem;

CREATE TABLE `user` (
  `email` varchar(25) NOT NULL,
  `username` varchar(35) NOT NULL,
  `password` varchar(60) NOT NULL,
  `id_Rol` int(11) NOT NULL DEFAULT 3,
  PRIMARY KEY (`email`),
  KEY `id_Rol` (`id_Rol`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_Rol`) REFERENCES `user_rol` (`id_Rol`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE `user_rol` (
  `id_Rol` int(11) NOT NULL AUTO_INCREMENT,
  `rolname` varchar(15) NOT NULL,
  PRIMARY KEY (`id_Rol`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = latin1;
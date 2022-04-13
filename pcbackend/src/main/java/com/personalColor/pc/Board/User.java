package com.personalColor.pc.Board;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class User {
	
		@Id 	//primary key
		@GeneratedValue(strategy= GenerationType.IDENTITY)	//auto_increment
		private long userNum;
        
		@Column(length = 30)
		private String name;

		@Column(length = 30)
		private int age;
		
		@Column(length = 30)
		private String gender;
		
		@Column(length = 100)
		private String imgPath;

		@Column(length = 100)
		private String dirPath;

		@Column(length = 100)
		private String res;
  
		
		
		public String getRes() {
			return res;
		}

		public void setRes(String res) {
			this.res = res;
		}
		public String getDirPath() {
			return dirPath;
		}

		public void setDirPath(String dirPath) {
			this.dirPath = dirPath;
		}

		public String getImgPath() {
			return imgPath;
		}

		public void setImgPath(String imgPath) {
			this.imgPath = imgPath;
		}

		public long getUserNum() {
			return userNum;
		}

		public void setUserNum(long userNum) {
			this.userNum = userNum;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public int getAge() {
			return age;
		}

		public void setAge(int age) {
			this.age = age;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}
	      
//	      @ColumnDefault("'user'")
//	      private String role;
	      
//	      @CreationTimestamp	//시간 자동 입력
//	      private Timestamp createData;
	      
//	      @Lob //대용량 데이터 
//	      private String content;
	      
//	      @ManyToOne(fetch = FetchType.EAGER)	//board Entity관점에서 many = board,  one = 유저
//	      @JoinColumn(name="user_id")	//실제 테이블에 저장하는 이름 (데이터베이에서 Fk로 저장됨.)
//	      private User user_id;	//DB는 오브젝트를 저장할 수 없다. FK, 자바는 오브젝트를 저장할 수 있다.
	      
//	      @ManyToOne //하나의 게시글에는 여러개의 댓글이 달릴 수 있다.
//	      @JoinColumn(name = "boardId")
//	      private Board board;
																	//mappedBy = 연관관계 주인 x fk아님.
																	//fetch = FetchType.EAGER 바로 가져옴.
																	//fetch = FetchType.EAGER 바로 가져옴.
//	      @OneToMany(mappedBy = "board", fetch = FetchType.LAZY)  //하나의 게시글에는 여러개의 댓글이 달릴 수 있다.(board테이블 기준) joincolum은 필요없음 board테이블을 가져올 때 select만 
//	      private List<Reply> reply;


}

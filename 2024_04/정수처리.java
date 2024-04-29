import java.util.Scanner;  //입력관련된 패키지 임포트
public class Test   //자바프로그램은 클래스안에 속성과 메소드를 만들어서 실행한다. Test는 클래스 이름
{
    public static void main(String[] args)  //public static은 main앞에 무조건 써야함, void는 반환값이 없다는 뜻
    {
        Scanner scan = new Scanner(System.in);  //키보드로부터 받은값을 변수에저장. new는 객체 생성, Scanner는 클래스 이름 , System.in은 키보드
        int a = scan.nextInt();  //입력받은값을 정수형으로 반환한다.
        System.out.printf("a*3 = %d\n", a*3);  //d위치에 a*3이 print된다
        System.out.printf("a/2 = ", + (a/2)); //a/2 = 2 로 print된다
        System.out.printf("a-1 = ", (a-1));   //a-1 = 3으로 print된다
        scan.close(); //객체변수 scan에 배정된 메모리를 해제한다
    }
}
